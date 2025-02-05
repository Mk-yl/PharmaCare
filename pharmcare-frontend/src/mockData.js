export const medicines = [
  {
    id: 1,
    name: 'Paracétamol',
    description: 'Utilisé pour soulager la douleur et réduire la fièvre.',
    price: 2.50,
    lab_id: 1, // Lab ID ajouté
  },
  {
    id: 2,
    name: 'Amoxicilline',
    description: 'Antibiotique pour les infections bactériennes.',
    price: 5.00,
    lab_id: 2,
  },
  {
    id: 3,
    name: 'Ibuprofène',
    description: 'Soulage la douleur et réduit l’inflammation.',
    price: 3.00,
    lab_id: 1,
  },
  {
    id: 4,
    name: 'Diazépam',
    description: 'Traite l’anxiété, les spasmes musculaires et les convulsions.',
    price: 4.75,
    lab_id: 3,
  },
  {
    id: 5,
    name: 'Oméprazole',
    description: 'Réduit l’acidité de l’estomac pour traiter les brûlures d’estomac.',
    price: 6.25,
    lab_id: 1,
  },
  {
    id: 6,
    name: 'Atorvastatine',
    description: 'Réduit le cholestérol et le risque de maladies cardiaques.',
    price: 7.50,
    lab_id: 2,
  },
  {
    id: 7,
    name: 'Metformine',
    description: 'Traite le diabète de type 2 en contrôlant le taux de sucre dans le sang.',
    price: 8.00,
    lab_id: 3,
  },
  {
    id: 8,
    name: 'Amlodipine',
    description: 'Traite l’hypertension artérielle et les douleurs thoraciques.',
    price: 9.00,
    lab_id: 1,
  },
  {
    id: 9,
    name: 'Albutérol',
    description: 'Soulage les symptômes de l’asthme et de la BPCO.',
    price: 10.00,
    lab_id: 3,
  },
  {
    id: 10,
    name: 'Hydrochlorothiazide',
    description: 'Traite l’hypertension artérielle et la rétention d’eau.',
    price: 11.00,
    lab_id: 2,
  },
  {
    id: 11,
    name: 'Lisinopril',
    description: 'Traite l’hypertension artérielle et l’insuffisance cardiaque.',
    price: 12.00,
    lab_id: 3,
  },
  {
    id: 12,
    name: 'Lévothyroxine',
    description: 'Traite l’hypothyroïdie et le goitre.',
    price: 13.00,
    lab_id: 1,
  },
  {
    id: 13,
    name: 'Simvastatine',
    description: 'Réduit le cholestérol et le risque de maladies cardiaques.',
    price: 14.00,
    lab_id: 2,
  },
  {
    id: 14,
    name: 'Losartan',
    description: 'Traite l’hypertension artérielle et réduit le risque d’AVC.',
    price: 15.00,
    lab_id: 3,
  },
  {
    id: 15,
    name: 'Azithromycine',
    description: 'Antibiotique pour les infections bactériennes.',
    price: 16.00,
    lab_id: 1,
  },
  {
    id: 16,
    name: 'Métoprolol',
    description: 'Traite l’hypertension artérielle et l’angine de poitrine.',
    price: 17.00,
    lab_id: 2,
  },
  {
    id: 17,
    name: 'Zolpidem',
    description: 'Traite l’insomnie en aidant à s’endormir.',
    price: 18.00,
    lab_id: 3,
  },
];

// Liste des laboratoires (exemple)
export const labs = [
  { id: 1, name: 'Laboratoire A', image: '/images/laboratoire-a.png' },
  { id: 2, name: 'Laboratoire B', image: '/images/laboratoire-b.png' },
  { id: 3, name: 'Laboratoire C', image: '/images/laboratoire-c.png' },
];


export const cartItems = [
  {
    id: 1,
    medicine: medicines[0],
    quantity: 2,
    price: medicines[0].price,
  },
  {
    id: 2,
    medicine: medicines[1],
    quantity: 1,
    price: medicines[1].price,
  },
  {
    id: 3,
    medicine: medicines[2],
    quantity:  3,
    price: medicines[2].price,
  }
];
