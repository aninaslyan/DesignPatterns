// Provides a simplified interface to a complex subsystem

// Subsystem classes
class DVDPlayer {
    on(): void {
        console.log('DVD Player is on.');
    }

    play(movie: string): void {
        console.log(`Playing movie: ${movie}`);
    }
}

class Projector {
    on(): void {
        console.log('Projector is on.');
    }

    setInput(input: string): void {
        console.log(`Projector input set to: ${input}`);
    }
}

class SoundSystem {
    on(): void {
        console.log('Sound System is on.');
    }

    setVolume(volume: number): void {
        console.log(`Sound System volume set to: ${volume}`);
    }
}

class Lights {
    dim(): void {
        console.log('Lights are dimmed.');
    }
}

// Facade
class HomeTheaterFacade {
    private dvdPlayer: DVDPlayer;
    private projector: Projector;
    private soundSystem: SoundSystem;
    private lights: Lights;

    constructor(dvdPlayer: DVDPlayer, projector: Projector, soundSystem: SoundSystem, lights: Lights) {
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.lights = lights;
    }

    watchMovie(movie: string): void {
        console.log('Get ready to watch a movie...');
        this.lights.dim();
        this.dvdPlayer.on();
        this.projector.on();
        this.projector.setInput('DVD');
        this.soundSystem.on();
        this.soundSystem.setVolume(5);
        this.dvdPlayer.play(movie);
    }
}

const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const soundSystem = new SoundSystem();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, soundSystem, lights);

homeTheater.watchMovie('Inception');
