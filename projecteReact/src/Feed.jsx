import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Feed = () => {
  return (
    <div>
      <h1>Feed de Instagram</h1>
      <InstagramEmbed
        url="https://www.instagram.com/christianriossalon/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
};

export default Feed;
