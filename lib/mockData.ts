import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg: "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'Dennis La',
    lastName: 'Sassa',
    email: 'd**@gmail.com',
    username: 'Dennislasassa64',
    password: 'Dennis234',
    createdAt: '2026-1-13', // y-m-d
    updatedAt: '2026-1-29', // y-m-d
    transactionCode: '7894',
    transactionMsg: 'You cannot make transactions right now. Before you can make any transactions you have to deposit the sum of $2500 into your account.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876543210',
        balance: 450000500.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer to Alice Dan',
            category: '****3556',
            date: 'Jan 29, 2026',
            amount: -500.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Alice Dan:Inheritance',
            category: '****4466',
            date: 'Jan 27, 2026',
            amount: 200000000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Alice Dan:Inheritance',
            category: '****7463',
            date: 'Jan 18, 2026',
            amount: 100000000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Alice Dan:Inheritance',
            category: '****4389',
            date: 'Jan 12, 2026',
            amount: 150000000.0,
            status: 'success'
          },
          {
            merchant: 'Account Opening',
            category: '*******',
            date: 'Jan 12, 2026',
            amount: 1000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456789011',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0003',
    firstName: 'Jessica',
    lastName: 'White LLC',
    email: 'jess**16901@gmail.com',
    phone: '******8852',
    createdAt: '2026-1-14', // y-m-d
    username: 'Jessicawgood56',
    password: '1122lovemeAa$',
    transactionCode: '7894',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '42008334486',
        routingNumber: '3222717224',
        balance: 9800090.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Peace Keeping Disbursement',
            category: '****4389',
            date: 'Jan 5, 2026',
            amount: 9800090.0,
            status: 'success'
          },
          {
            merchant: 'Account Opening',
            category: '*******',
            date: 'December 28, 2025',
            amount: 0.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '4589021736',
        routingNumber: '073915842',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4927348162059473',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0004',
    firstName: 'Chris',
    lastName: 'Hughes',
    email: 'c**@gmail.com',
    createdAt: '2026-1-16', // y-m-d
    username: 'ChrisHug56',
    password: 'Chris1204',
    transactionCode: '7894',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '42008334486',
        routingNumber: '354731724',
        balance: 4355290.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Peace Keeping Disbursement',
            category: '****4721',
            date: 'Jan 5, 2026',
            amount: 400000.0,
            status: 'success'
          },
          {
            merchant: 'Military Payroll Credit',
            category: '****6389',
            date: 'Dec 22, 2025',
            amount: 350000.0,
            status: 'success'
          },
          {
            merchant: 'Direct Deposit',
            category: '****2910',
            date: 'Nov 18, 2025',
            amount: 320000.0,
            status: 'success'
          },
          {
            merchant: 'Trip Expenses Reimbursement',
            category: '****8543',
            date: 'Oct 10, 2025',
            amount: 300000.0,
            status: 'success'
          },
          {
            merchant: 'Peace Keeping Disbursement',
            category: '****1124',
            date: 'Sep 28, 2025',
            amount: 275000.0,
            status: 'success'
          },
          {
            merchant: 'Military Payroll Credit',
            category: '****5698',
            date: 'Aug 14, 2025',
            amount: 265000.0,
            status: 'success'
          },
          {
            merchant: 'Direct Deposit',
            category: '****9872',
            date: 'Jul 3, 2025',
            amount: 250000.0,
            status: 'success'
          },
          {
            merchant: 'Trip Expenses Reimbursement',
            category: '****3345',
            date: 'Jun 21, 2025',
            amount: 240000.0,
            status: 'success'
          },
          {
            merchant: 'Peace Keeping Disbursement',
            category: '****7781',
            date: 'May 17, 2025',
            amount: 225000.0,
            status: 'success'
          },
          {
            merchant: 'Military Payroll Credit',
            category: '****5566',
            date: 'Apr 6, 2025',
            amount: 200000.0,
            status: 'success'
          },
          {
            merchant: 'Direct Deposit',
            category: '****9933',
            date: 'Mar 29, 2025',
            amount: 190000.0,
            status: 'success'
          },
          {
            merchant: 'Trip Expenses Reimbursement',
            category: '****2211',
            date: 'Feb 12, 2025',
            amount: 180000.0,
            status: 'success'
          },
          {
            merchant: 'Peace Keeping Disbursement',
            category: '****6677',
            date: 'Jan 23, 2025',
            amount: 175000.0,
            status: 'success'
          },
          {
            merchant: 'Military Payroll Credit',
            category: '****4455',
            date: 'Jan 8, 2025',
            amount: 180000.0,
            status: 'success'
          },
          {
            merchant: 'Direct Deposit',
            category: '****8899',
            date: 'Jan 1, 2025',
            amount: 200290.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '4589021736',
        routingNumber: '073915842',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4927348162059473',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0005',
    firstName: 'Lawson',
    lastName: 'Sophie',
    email: 'l**@gmail.com',
    createdAt: '2026-1-27', // y-m-d
    username: 'LawsonSophie56',
    password: 'SophieLaw04',
    transactionCode: '7894',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '42008334872',
        routingNumber: '1388635724',
        balance: 1380000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Inheritance Investment Return',
            category: '****9377',
            date: 'Dec 20, 2025',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****4343',
            date: 'Sep 18, 2025',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****5645',
            date: 'Jun 22, 2025',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****3256',
            date: 'Mar 17, 2025',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****1368',
            date: 'Dec 18, 2024',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****9664',
            date: 'Sep 20, 2024',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****6329',
            date: 'Jun 20, 2024',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****9009',
            date: 'Dec 20, 2023',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****5453',
            date: 'Sep 25, 2023',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****9011',
            date: 'Jun 20, 2023',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****4562',
            date: 'Dec 21, 2022',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****0653',
            date: 'Sep 20, 2022',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****7464',
            date: 'Jun 19, 2022',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****9017',
            date: 'Dec 24, 2021',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****3576',
            date: 'Sep 20, 2021',
            amount: 42000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Deposit',
            category: '****8466',
            date: 'Mar 20, 2021',
            amount: 750000,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '4589021736',
        routingNumber: '073915842',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4927348162050376',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0006',
    firstName: 'Albert',
    lastName: 'Patrick',
    email: 'a**@gmail.com',
    createdAt: '2026-2-14', // y-m-d
    username: 'AlbertPatrick56',
    password: 'Debby83611',
    transactionCode: '7894',
    transactionMsg: 'Dear customer, you transfer can not be processed right now until you pay a token fees of $10,000 before your transfer can be proceed',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '42008334872',
        routingNumber: '1388635724',
        balance: 4000000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Inheritance Investment Return',
            category: '****9377',
            date: 'Feb 13, 2026',
            amount: 500000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****3545',
            date: 'Feb 13, 2026',
            amount: 500000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****6448',
            date: 'Feb 13, 2026',
            amount: 500000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****2443',
            date: 'Feb 13, 2026',
            amount: 500000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****4784',
            date: 'Feb 13, 2026',
            amount: 500000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****7583',
            date: 'Feb 13, 2026',
            amount: 500000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****5775',
            date: 'Feb 13, 2026',
            amount: 500000,
            status: 'success'
          },
          {
            merchant: 'Inheritance Investment Return',
            category: '****5288',
            date: 'Feb 13, 2026',
            amount: 500000,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '4589021736',
        routingNumber: '073915842',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4927348162050376',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0007',
    firstName: 'J.',
    lastName: 'ANTIQUES',
    email: 'a**@gmail.com',
    createdAt: '2026-3-24', // y-m-d
    username: 'Jantiques25',
    password: 'Jantiques41',
    transactionCode: '7894',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '42008334872',
        routingNumber: '1388635724',
        balance: 850000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer from OrbitEdge Technologies',
            category: '****4563',
            date: 'Mar 24, 2026',
            amount: 850000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to BluePeak Ventures',
            category: '****4921',
            date: 'Mar 03, 2026',
            amount: -92000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to SilverLine Solutions',
            category: '****8374',
            date: 'Feb 27, 2026',
            amount: -3000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from ApexCore Technologies',
            category: '****1847',
            date: 'Feb 15, 2026',
            amount: 47000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to GreenField Enterprises',
            category: '****9263',
            date: 'Feb 10, 2026',
            amount: -5000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to NovaBridge Group',
            category: '****3746',
            date: 'Feb 09, 2026',
            amount: -1000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to PrimeAxis Ltd',
            category: '****6582',
            date: 'Feb 05, 2026',
            amount: -7650.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from ZenithWorks',
            category: '****2371',
            date: 'Jan 30, 2026',
            amount: 53000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to UrbanHive Co.',
            category: '****5918',
            date: 'Jan 27, 2026',
            amount: -28000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from BrightPath Consulting',
            category: '****4832',
            date: 'Jan 25, 2026',
            amount: 36000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to CloudSphere Systems',
            category: '****7294',
            date: 'Jan 20, 2026',
            amount: -61000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to NextWave Innovations',
            category: '****3619',
            date: 'Jan 10, 2026',
            amount: -24000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from GoldenEdge Services',
            category: '****8492',
            date: 'Jan 01, 2026',
            amount: 58000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to SwiftCore Logistics',
            category: '****4781',
            date: 'Dec 29, 2025',
            amount: -26000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from IronClad Industries',
            category: '****1397',
            date: 'Dec 28, 2025',
            amount: 64000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '42008336783',
        routingNumber: '1388639646',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4927348162050376',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0008',
    firstName: 'Ronald',
    lastName: 'Ura',
    email: 'r**@gmail.com',
    createdAt: '2026-5-8', // y-m-d
    username: 'Ronaldura25',
    password: 'RonUra1$',
    transactionCode: '7894',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '42008334872',
        routingNumber: '1388635724',
        balance: 182000000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Wire Transfer~NovaBridge Group',
            category: '****4563',
            date: 'Mar 24, 2026',
            amount: 182000000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '42008336783',
        routingNumber: '1388639646',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4927348162050376',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0009',
    firstName: 'Bethany',
    lastName: 'Morgan Guerrera',
    email: 'bet**696@gmail.com',
    phone: '+1778851****',
    createdAt: '2026-5-10', // y-m-d
    username: 'bethanymorgan696',
    password: 'Barret1993',
    transactionCode: '1920',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '42008334872',
        routingNumber: '1388635724',
        balance: 10000000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Ref#589857668...',
            category: '****1430',
            date: 'Sep 19, 2006',
            amount: 650000.0,
            status: 'success'
          },
          {
            merchant: 'Wire Transfer',
            category: '****3292',
            date: 'Jul 6, 2006',
            amount: 950000.0,
            status: 'success'
          },
          {
            merchant: 'Direct Deposit',
            category: '****2780',
            date: 'May 22, 2006',
            amount: 2900000.0,
            status: 'success'
          },
          {
            merchant: 'Bank Transfer',
            category: '****8607',
            date: 'Mar 16, 2006',
            amount: 4300000.0,
            status: 'success'
          },
          {
            merchant: 'Wire Transfer',
            category: '****0857',
            date: 'Mar 9, 2006',
            amount: 600000.0,
            status: 'success'
          },
          {
            merchant: 'Tax Fund Recovery',
            category: '****7394',
            date: 'Dec 5, 2005',
            amount: 20000.0,
            status: 'success'
          },
          {
            merchant: 'Direct Deposit',
            category: '****9815',
            date: 'Nov 17, 2005',
            amount: 580000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Alistair Vance',
            category: '****9377',
            date: 'Dec 20, 2003',
            amount: -540000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Arthur Sterling',
            category: '****4343',
            date: 'Sep 18, 2003',
            amount: -620000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Dominic Mercer',
            category: '****2003',
            date: 'Aug 25, 2003',
            amount: -370000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Victor Kensington',
            category: '****5645',
            date: 'Jun 22, 2003',
            amount: -42000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Seraphina Valois',
            category: '****3256',
            date: 'Mar 17, 2003',
            amount: -490000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Lawrence Whittaker',
            category: '****9009',
            date: 'Dec 29, 2002',
            amount: -42000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Maxwell Thorne',
            category: '****1368',
            date: 'Nov 18, 2002',
            amount: -570000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Gideon Rhodes',
            category: '****9664',
            date: 'Sep 20, 2002',
            amount: -210000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Clarissa Meade',
            category: '****6329',
            date: 'Jun 20, 2002',
            amount: -490000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Imogen Carlyle',
            category: '****9017',
            date: 'Nov 14, 2001',
            amount: -56000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Octavia Spencer',
            category: '****3576',
            date: 'Sep 16, 2001',
            amount: -340700,
            status: 'success'
          },
          {
            merchant: 'Transfer to Nathaniel Cross',
            category: '****3773',
            date: 'Mar 20, 2001',
            amount: -750000,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '42008336783',
        routingNumber: '1388639646',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4927348162050376',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
