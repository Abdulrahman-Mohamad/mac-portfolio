import { useState } from "react";
import { Copy, Check } from "lucide-react";
import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const CopyableLink = ({ title, text, link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm font-semibold text-gray-600 leading-relaxed">{text}</p>
      <div className="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-lg group hover:border-blue-400 transition-colors">
        <input
          type="text"
          readOnly
          value={link}
          className="flex-1 bg-transparent text-xs text-gray-500 outline-none overflow-hidden text-ellipsis"
        />
        <button
          onClick={handleCopy}
          className="p-1.5 hover:bg-white rounded-md transition-all active:scale-95 text-gray-400 hover:text-blue-500"
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
};

const Download = () => {
  const { windows } = useWindowStore();
  const data = windows.downloadfile?.data;

  if (!data) return null;

  const { ios, android, iosText, androidText } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="downloadfile" />
        <h2 className="flex w-full justify-center">{data.name}</h2>
      </div>
      <div className="p-6 space-y-8 bg-white min-w-[350px]">
        {ios && (
          <CopyableLink
            title="iOS"
            text={iosText}
            link={ios}
          />
        )}

        {android && (
          <CopyableLink
            title="Android"
            text={androidText}
            link={android}
          />
        )}
      </div>
    </>
  );
};

const DownloadWindow = WindowWrapper(Download, "downloadfile");
export default DownloadWindow;