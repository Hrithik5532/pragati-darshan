import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "किरण (भाऊ) लांडगे | शिवसेना युवा नगरसेवक | प्रभाग क्र. १६०",
  description = "नेता नव्हे कार्यकर्ता - किरण भाऊ लांडगे, शिवसेना युवा नगरसेवक प्रभाग क्र. १६०. ४००+ शिलाई मशीन, १६०+ टॅब्लेट वाटप, ८+ रस्त्यांचे सिमेंट काँक्रीटीकरण. मतदान: १५ जानेवारी २०२६. क्र. ३ धनुष्यबाण.",
  image = "https://customer-assets.emergentagent.com/job_pragati-darshan/artifacts/i9tglk0x_Screenshot%202026-01-13%20at%202.45.43%E2%80%AFAM.png",
  url = "https://kiranlandge.in/"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;
