// import React from 'react'

// export default function Portfolio() {
//   return (
//     <>
//       <div className='portfolio text-center container'>
//         <h2 className='text-center mt-5'>portfolio component</h2>
//         <p><i className='fa fa-star '></i> </p>
//         <div className='row  mt-5 mb-1'>
//           <div className='col-md-4 pb-5'>
//               <div className='card card-img '>
//                 <img src="src/images/imgi_1_poert1.png" alt=""  className=' rounded-2'/>
//                 <div className='layer d-flex justify-content-center align-items-center'>
//                   <i class="fa-solid fa-plus"></i>
//                 </div>
//               </div>
//           </div>
//           <div className='col-md-4 pb-5'>
//               <div className='card card-img '>
//                 <img src="src/images/imgi_2_port2.png" alt=""  className=' rounded-2'/>
//                                 <div className='layer d-flex justify-content-center align-items-center'>
//                   <i class="fa-solid fa-plus"></i>
//                 </div>
//               </div>
//           </div>
//           <div className='col-md-4 pb-5'>
//               <div className='card card-img '>
//                 <img src="src/images/imgi_3_port3.png" alt=""  className=' rounded-2'/>
//                                 <div className='layer d-flex justify-content-center align-items-center'>
//                   <i class="fa-solid fa-plus"></i>
//                 </div>
//               </div>
//           </div>
//           <div className='col-md-4 pb-5'>
//               <div className='card card-img '>
//                 <img src="src/images/imgi_1_poert1.png" alt=""  className=' rounded-2'/>
//                                 <div className='layer d-flex justify-content-center align-items-center'>
//                   <i class="fa-solid fa-plus"></i>
//                 </div>
//               </div>
//           </div>
//           <div className='col-md-4 pb-5'>
//               <div className='card card-img '>
//                 <img src="src/images/imgi_2_port2.png" alt=""  className=' rounded-2 '/>
//                                 <div className='layer d-flex justify-content-center align-items-center'>
//                   <i class="fa-solid fa-plus"></i>
//                 </div>
//               </div>
//           </div>
//           <div className='col-md-4 mb-5 pb-5'>
//               <div className='card card-img '>
//                 <img src="src/images/imgi_3_port3.png" alt=""  className=' rounded-2'/>
//                                 <div className='layer d-flex justify-content-center align-items-center'>
//                   <i class="fa-solid fa-plus"></i>
//                 </div>
//               </div>
//           </div>
//         </div>
//         <div className='light-box d-none'>
          
//         </div>
//       </div>
    
//     </>
//   )
// }







// _______________________________________________________________________________________________________________





import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [lightBoxImg, setLightBoxImg] = useState(null);

  const handleImageClick = (imgSrc) => {
    setLightBoxImg(imgSrc);
  };

  const handleClose = () => {
    setLightBoxImg(null);
  };

  // ✅ useEffect لمنع الاسكرول عند فتح اللايت بوكس
  useEffect(() => {
    if (lightBoxImg) {
      // الصورة مفتوحة: امنع الاسكرول
      document.body.style.overflow = 'hidden';
    } else {
      // الصورة مقفولة: رجّع الاسكرول
      document.body.style.overflow = 'auto';
    }

    // ✅ cleanup عند الخروج
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightBoxImg]);

  return (
    <>
      <div className='portfolio text-center container'>
        <h2 className='text-center mt-5'>portfolio component</h2>
        <p><i className='fa fa-star '></i> </p>

        <div className='row mt-5 mb-1'>
          {[
            "src/images/imgi_1_poert1.png",
            "src/images/imgi_2_port2.png",
            "src/images/imgi_3_port3.png",
            "src/images/imgi_1_poert1.png",
            "src/images/imgi_2_port2.png",
            "src/images/imgi_3_port3.png"
          ].map((imgSrc, index) => (
            <div className='col-md-4 pb-5' key={index}>
              <div className='card card-img' onClick={() => handleImageClick(imgSrc)} style={{ cursor: 'pointer' }}>
                <img src={imgSrc} alt='' className='rounded-2 w-100' />
                <div className='layer d-flex justify-content-center align-items-center'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightBoxImg && (
          <div
            className='lightbox position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'
            style={{ zIndex: 9999 }}
            onClick={handleClose}
          >
            <img
              src={lightBoxImg}
              alt='enlarged'
              className='rounded-2'
              style={{ maxWidth: '40%', maxHeight: '80%' }}
              onClick={(e) => e.stopPropagation()}
            />
            <span
              className='position-absolute top-0 end-0 m-3 text-white fs-1'
              style={{ cursor: 'pointer' }}
              onClick={handleClose}
            >
              &times;
            </span>
          </div>
        )}
      </div>
    </>
  );
}
