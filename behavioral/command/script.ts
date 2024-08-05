// Adding new commands without changing the existing code is the main goal of the Command pattern.

interface Command {
    execute(): void;
    undo(): void;
}

class TextEditor {
    private text: string = '';
    private clipboard: string = '';

    setText(text: string): void {
        this.text = text;
        console.log(`Text set to '${this.text}'`);
    }

    copy(): void {
        this.clipboard = this.text;
        console.log(`Copied text: ${this.clipboard}`);
    }

    paste(): void {
        this.text = this.clipboard;
        console.log(`Pasted text: ${this.text}`);
    }

    undoPaste(): void {
        this.text = this.text.replace(this.clipboard, '');
        console.log(`Undo paste: ${this.text}`);
    }
}

class CopyCommand implements Command {
    constructor(private editor: TextEditor) {
    }

    execute(): void {
        this.editor.copy();
    }

    undo(): void {
        this.editor.paste();
    }
}

class PasteCommand implements Command {
    private editor: TextEditor;

    constructor(editor: TextEditor) {
        this.editor = editor;
    }

    execute(): void {
        this.editor.paste();
    }

    undo(): void {
        this.editor.undoPaste();
    }
}

class EditorInvoker {
    private history: Command[] = [];

    executeCommand(command: Command): void {
        this.history.push(command);
        command.execute();
    }

    undo(): void {
        const command = this.history.pop();
        command?.undo();
    }
}

const editor = new TextEditor();
editor.setText('Hello, World!');


const copyCommand = new CopyCommand(editor);
const pasteCommand = new PasteCommand(editor);

const invoker = new EditorInvoker();

// Execute copy command
invoker.executeCommand(copyCommand);

// Execute paste command
invoker.executeCommand(pasteCommand);

// Undo the paste command
invoker.undo();
