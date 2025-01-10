import { Button } from "react-bootstrap";

const ResponseBody = (props: any) => {
  const { output } = props;
  return (
    <>
      <div className="body-title justify-content-between">
        <h4>Output:</h4>
        <Button variant="light" className="btn-sm">CLEAR</Button>
      </div>
      <div className="bg-white editor-section p-3">
        {output && output.startsWith('<') ? (
          <div dangerouslySetInnerHTML={{ __html: output }} />
        ) : (
          output
        )}
      </div>
    </>
  )
}

export default ResponseBody