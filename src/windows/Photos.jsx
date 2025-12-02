import WindowControls from "#components/WindowControls"
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window";
import { Mail, Search } from "lucide-react";

const Photos = () => {
    const { openWindow } = useWindowStore();
    return <>
        <div id="window-header">
            <WindowControls target="photos" />
            <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                <Mail className="icon" />
                <Search className="icon" />
            </div>
        </div>
        <div className="flex w-full max-h-[90vh] overflow-auto">
            <div className="sidebar">   
                <h2>Photos</h2>
                <ul>
                    {photosLinks.map(({ id, icon, title }) => (
                        <li key={id}>
                            <img src={icon} alt={title} />
                            <p>{title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="gallery">
                <ul className="flex items-center flex-wrap ">
                    {gallery.map(({ id, img }) => (
                        <li
                            key={id}
                            onClick={() =>
                                openWindow("imgfile", {
                                    id,
                                    name: "Gallery image",
                                    icon: "/images/image.png",
                                    kind: "file",
                                    fileType: "img",
                                    imageUrl: img,
                                })
                            }
                            className="w-40 h-60 overflow-hidden cursor-pointer flex-center"
                        >
                            <img src={img} alt={`Gallery image ${id}`} className="w-full h-full object-cover object-top" />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    </>
}

const PhotoWindow = WindowWrapper(Photos, "photos")
export default PhotoWindow