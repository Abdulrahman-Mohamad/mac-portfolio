import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

export default function Navbar() {
    return <>
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">AbdelRahman Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name }, i) => (
                        <li key={id}>
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