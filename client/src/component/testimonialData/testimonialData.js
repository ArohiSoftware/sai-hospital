import React from 'react';

const testimonialData = [
  {
    name: 'Abhay Tale',
    occupation: 'Data Analyst',
    rating: '★★★★★',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzd8vy7PaNc_jN-GOMWLdpBhXqQjxGpMaWme2UBES9TZwkUUPoliYA6Vh0g&s',
    review: '“Metus venenatis cursus ipsum egestas blandit accumsan est feugiat tempus dignissim ante nunc viverra nulla condimentum nunc in sit massa pulvinar tempor mi tortor sapien vel egestas odio bibendum sem ultrices tellus.”'
  },
  {
    name: 'Yash Tale',
    occupation: 'Software Developer',
    rating: '★★★★★',
    image: 'https://media.licdn.com/dms/image/D4D03AQEWkW2vJtLV9g/profile-displayphoto-shrink_400_400/0/1708179223149?e=1725494400&v=beta&t=puiFwEioO07KivvjGe7zQH-Dka9bc6E5gf0XyCsJe2I',
    review: '“Sit cursus quam sagittis pellentesque iaculis mauris purus tincidunt urna ullamcorper viverra aliquet aliquet aliquet donec non molestie egestas cursus amet eu facilisi varius libero diam pharetra odio pharetra at cras aliquam.”'
  },
  {
    name: 'Liam Bower',
    occupation: 'Mechanic',
    rating: '★★★★★',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzd8vy7PaNc_jN-GOMWLdpBhXqQjxGpMaWme2UBES9TZwkUUPoliYA6Vh0g&s',
    review: '“Nisl ac massa porttitor adipiscing pretium nec sit turpis in adipiscing faucibus quam consectetur pellentesque et mi molestie amet, et, platea facilisi malesuada vitae in scelerisque elementum vestibulum accumsan at etiam vitae.”'
  },
  {
    name: 'Nicky',
    occupation: 'Dancer',
    rating: '★★★★★',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzd8vy7PaNc_jN-GOMWLdpBhXqQjxGpMaWme2UBES9TZwkUUPoliYA6Vh0g&s',
    review: '“Tristique sed odio nunc ut morbi sit urna, vitae, sed pellentesque massa, pellentesque lacinia sapien tempor enim netus euismod tincidunt varius malesuada ornare morbi lorem suspendisse non posuere penatibus tincidunt aliquam lorem.”'
  }
];

const testimonialCardClasses = 'bg-card p-6 rounded-lg shadow-lg';
const ratingStarClasses = 'text-green-500';
const imageClasses = 'w-8 h-8 rounded-full mr-2';

const TestimonialCard = ({ name, occupation, rating, image, review, largeImage }) => (
  <div className={testimonialCardClasses}>
    <div className="flex items-center mb-4">
      <span className={ratingStarClasses}>{rating}</span>
    </div>
    <p className="text-muted-foreground mb-4">{review}</p>
    <div className="flex items-center">
      <img className={largeImage ? 'w-24 h-24 rounded-full mr-4' : imageClasses} src={image} alt={name} />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-muted-foreground text-sm">{occupation}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="bg-[var(--background)] text-[var(--foreground)] p-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-bold mb-4">What People Say About Us</h2>
          <p className="text-muted-foreground mb-4">
            Elementum in lacus, fermentum dapibus magna lectus ut vel feugiat pellentesque molestie quam venenatis, tempor in.
          </p>
          <a href="#" className="text-primary hover:underline">View All Testimonials</a>
        </div>
        <div className="md:col-span-2">
          <TestimonialCard {...testimonialData[0]} largeImage={true} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {testimonialData.slice(1).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} largeImage={false} />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
