import React from 'react';
import Image from 'next/image';

const Photos = () => {
  const images = [
    { src: '13-sfo2022.jpg', alt: 'Happy New Year', caption: 'Happy New Year 2022' },
    { src: '71-brocade-farewell.jpg', alt: 'Brocade Farewell', caption: 'Brocade Team farewell; Location - BayArea; Date - 2017' },
    { src: '72-ciena-team-sport.jpg', alt: 'Ciena Sports', caption: 'Ciena Team sports activity; Location - BayArea; Date - 2014' },
    { src: '74-cisco-n3k-team.jpg', alt: 'Cisco Team Hiking', caption: 'Cisco Nexus 3K Team members hiking; Location - BayArea; Date - 2013' },
    { src: '75-cisco-n3k-team2.jpg', alt: 'Cisco Team Hiking', caption: 'Cisco Nexus 3K Team members hiking; Location - BayArea; Date - 2013' },
    { src: '76-cisco-n7k-team.jpg', alt: 'Cisco Celebrating', caption: 'Cisco Nexus 7K Team celebrating; Location - BayArea; Date - 2011' },
    { src: '77-lvl7-team1.jpg', alt: 'Lvl7 Systems Lunch', caption: 'Lvl7 Systems team lunch; Location - Hyderabad, IN; Date - 2008' },
    { src: '78-motorola-india-team1.jpg', alt: 'Motorola Team', caption: 'Motorola Team pic; Location - Hyderabad, IN; Date - 2003' },
    { src: '79-vmware-team.jpg', alt: 'VMware Team Lunch', caption: 'VMware team lunch; Location - BayArea; Date - 2019' },
    { src: '21-satya-blore0004.jpg', alt: 'Friends in Bangalore', caption: 'These are my IITM friends; Location - Bangalore; Date - 2001' },
    { src: '22-satya-blore0010.jpg', alt: 'Amusement Park', caption: 'This was taken in an amusement park; Location - Bangalore; Date - 2001-2002' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image 
              src={`/images/${image.src}`}
              alt={image.alt}
              width={500} 
              height={300} 
              layout="responsive"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700 text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;