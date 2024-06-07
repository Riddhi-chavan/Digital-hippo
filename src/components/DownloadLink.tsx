"use client"
import { useCart } from "@/hooks/use-cart";

interface DownloadLinkProps {
  productId: string;
  productName: string;
  downloadUrl: string;
}

const DownloadLink = ({ productId, productName, downloadUrl }: DownloadLinkProps) => {
  const { removeItems } = useCart();

  const handleDownload = () => {
    removeItems(productId);
  };

  return (
    <a
      href={downloadUrl}
      download={productName}
      onClick={handleDownload}
      className="text-blue-600 hover:underline underline-offset-2"
    >
      Download asset
    </a>
  );
};

export default DownloadLink;
