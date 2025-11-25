import Dock from "#components/Dock";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Safari from "#windows/Safari";
import Resume from "#windows/Resume";
import Terminal from "#windows/Terminal";
import Finder from "#windows/Finder";
import Text from "#windows/Text";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import ImageWindow from "#windows/ImageWindow";
import Contact from "#windows/Contact";
import Home from "#components/Home";
import Photos from "#windows/Photos";

gsap.registerPlugin(Draggable);

export default function App() {
    return <>
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <ImageWindow />
            <Contact />
            <Home />
            <Photos />
        </main>
    </>
}