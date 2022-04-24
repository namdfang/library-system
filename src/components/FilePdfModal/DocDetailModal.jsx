import { Modal } from "antd";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import pdf from "../../assets/documents/CayNhiPhan.pdf";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./DocDetailModal.scss";

export default function DocDetailModal(props) {
  const { showModal, handleCancelModal } = props;

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <Modal
        centered
        visible={showModal}
        style={{ top: 66 }}
        onCancel={handleCancelModal}
        footer={null}
        className="modal"
      >
        <p className="document-title ps-3 fs-4 mb-0">
          A Casey Christi night books
        </p>
        <div style={{ height: "640px" }}>
          <Viewer
            fileUrl={pdf}
            defaultScale={0.4}
            theme="dark"
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Modal>
    </Worker>
  );
}
