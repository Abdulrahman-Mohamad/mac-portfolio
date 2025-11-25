import Dock from "#components/Dock";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Safari from "#windows/Safari";
import Resume from "#windows/Resume";
import Terminal from "#windows/Terminal";
import Finder from "#windows/Finder";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function App() {
    return <>
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            {/* <Resume /> */}
            <Finder />
        </main>
    </>
}