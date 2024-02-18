import { useStorageUpload } from "@thirdweb-dev/react";
import { NextPage } from "next";
import{useCallback} from "react";
import {useDropzone} from "react-dropzone"; 

const Home: NextPage = () => {
  const { mutateAsync: upload } = useStorageUpload();
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const uris = await upload ({data: acceptedFiles});
    console.log(uris);
  },
  [upload]
  );
  const {getRootProps, getInputProps} = useDropzone({onDrop});
  
  return (
    <div {...getRootProps()}> 
      <input {...getInputProps()} />
      <button>Drag 'n' drop some files here, or click to select files</button>
    </div>
  );
};

export default Home;
