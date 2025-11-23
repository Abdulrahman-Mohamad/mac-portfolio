import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

export default function Navbar() {
    const { openWindow } = useWindowStore();

    return <>
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">AbdelRahman Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }, i) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img
                                src={img}
                                alt={`icon-${id}`}
                                className="icon-hover"
                            />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    </>
}