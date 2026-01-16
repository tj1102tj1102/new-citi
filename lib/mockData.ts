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
    transactionMsg:
      "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
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
    updatedAt: '2026-1-15', // y-m-d
    transactionCode: '7894',
    transactionMsg:
      'You cannot make transactions right now. Kindly drop Anti money certificate to withdraw your funds.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876543210',
        balance: 250001000.0,
        isPrimary: true,
        transactions: [
          {
            merchant:
              'Transfer from Alice Dan:Inheritance',
            category: '****7463',
            date: 'Jan 18, 2026',
            amount: 100000000.0,
            status: 'success'
          },
          {
            merchant:
              'Transfer from Alice Dan:Inheritance',
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
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
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
    transactionMsg:
      'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
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
  }
];
