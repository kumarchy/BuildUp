import React, { useState } from 'react';

const Form = () => {
  const [image, setImage] = useState(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile && droppedFile.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(droppedFile);
      setImage(imageURL);
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(selectedFile);
      setImage(imageURL);
    } else {
      alert('Please upload a valid image file.');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mt-5 md:w-[70%] sm:w-[70%] w-[80%]">
        <form
          action=""
          className="flex flex-col gap-5"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >
          <div
            className="border-dotted border-[2px] h-[130px]  flex justify-center items-center cursor-pointer"
            onClick={() => document.getElementById('fileInput').click()}
          >
            {image ? (
              <img src={image} alt="Preview" className="w-full max-h-full" />
            ) : (
              <span>Drag and Drop Project HomePage</span>
            )}
          </div>
          <input
            type="file"
            id="fileInput"
            hidden
            accept="image/*"
            onChange={handleFileInputChange}
          />
          <input
            type="text"
            placeholder="Project Title"
            className="border-[1px] p-2 outline-none"
          />
          <textarea
            rows={5}
            placeholder="Project Description"
            className="border-[1px] p-2 outline-none"
          />
          <input type='text' className="border-[1px] p-2 outline-none" placeholder='TechStack'>
          </input>
          <input
            type="text"
            placeholder="Github Link"
            className="border-[1px] p-2 outline-none"
          />
          <input
            type="text"
            placeholder="Deployed Link"
            className="border-[1px] p-2 outline-none"
          />
          <div>
            <button type="submit" className="border-[1px] p-2 bg-green-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
