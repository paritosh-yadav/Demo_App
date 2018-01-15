const cities = [
  {
    cityId: 1,
    cityName: 'Jaipur',
    citySubtitle: 'The Pink City',
    cityInfo: 'Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.',
    cityImageUri: 'https://c1.staticflickr.com/9/8473/8114485602_77f18999bb_c.jpg',
    cityLatitude: 26.900000,
    cityLongitude: 75.800000,
    cityDistance: null,
    cityNearBy: [
      {
        locationId: 1,
        locationName: 'Hawa Mahal',
        locationInfo: 'Hawa Mahal (English translation: "Palace of Winds" or "Palace of the Breeze") is a palace in Jaipur, India. It is constructed of red and pink sandstone. The palace sits on the edge of the City Palace, Jaipur, and extends to the zenana, or women`s chambers.',
        locationImageUri: 'https://c2.staticflickr.com/4/3798/9676293502_05f527d8ff_b.jpg'
      },
      {
        locationId: 2,
        locationName: 'Albert Hall',
        locationInfo: 'The Albert Hall Museum is a museum in Jaipur in Rajasthan, India. It is the oldest museum of the state and functions as the State museum of Rajasthan. The building is situated in Ram Niwas Garden outside the city wall opposite New gate and is a fine example of Indo-Saracenic architecture. The building was designed by Sir Samuel Swinton Jacob, assisted by Mir Tujumool Hoosein, and was opened as public museum in 1887.',
        locationImageUri: 'https://c1.staticflickr.com/9/8107/8481618372_cb67160231_b.jpg'
      }
    ]
  },
  {
    cityId: 2,
    cityName: 'Delhi',
    citySubtitle: 'India’s Capital',
    cityInfo: 'New Delhi is the capital of India and one of Delhi city’s 11 districts. Although colloquially Delhi and New Delhi are used interchangeably to refer to the National Capital Territory of Delhi, these are two distinct entities, with New Delhi forming a small part of Delhi. The National Capital Region is a much larger entity comprising the entire National Capital Territory of Delhi along with adjoining districts. It is surrounded by Haryana on three sides and Uttar Pradesh on the east.',
    cityImageUri: 'https://c1.staticflickr.com/9/8073/8303525233_4c5c1ae11f_b.jpg',
    cityLatitude: 28.610000,
    cityLongitude: 77.230000,
    cityDistance: null,
    cityNearBy: [
      {
        locationId: 1,
        locationName: 'Qutb Minar',
        locationInfo: 'The Qutub Minar is a minaret that forms a part of the Qutab complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi, India.[1][2] Qutub Minar is a 73-metre (239.5 feet) tall tapering tower of five storeys, with a 14.3 metres (47 feet) base diameter, reducing to 2.7 metres (9 feet) at the peak.[3] It contains a spiral staircase of 379 steps.[4] Its design is thought to have been based on the Minaret of Jam, in western Afghanistan.',
        locationImageUri: 'https://c2.staticflickr.com/8/7025/6497072741_eb5863228a_b.jpg'
      },
      {
        locationId: 2,
        locationName: 'Red Fort',
        locationInfo: 'The Red Fort is a historic fort in the city of Delhi in India. It was the main residence of the emperors of the Mughal dynasty for nearly 200 years, until 1856. It is located in the center of Delhi and houses a number of museums. In addition to accommodating the emperors and their households, it was the ceremonial and political center of the Mughal state and the setting for events critically impacting the region.',
        locationImageUri: 'https://c1.staticflickr.com/3/2893/10867863033_997a6746bb_b.jpg'
      }
    ]
  },
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(cities)
    }, 3000)
  })
}