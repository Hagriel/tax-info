import { Upload, Calculator, TrendingUp, DollarSign, Shield } from 'lucide-react';

export const gradients = {
  emerald: 'from-emerald-500 to-teal-500',
  blue: 'from-blue-500 to-indigo-500',
  purple: 'from-purple-500 to-pink-500',
  amber: 'from-amber-500 to-orange-500'
};

export const TABS = [
  { id: 'upload', label: 'Upload & Entry', icon: Upload },
  { id: 'results', label: 'Results', icon: TrendingUp }
];

export const FIELDS = {
  income: { title: 'Income', icon: DollarSign, fields: [
    { key: 'income1', label: 'Your Income' },
    { key: 'income2', label: 'Spouse Income' },
    { key: 'gains', label: 'Investment Gains' },
    { key: 'dividends', label: 'Dividend Income' },
    { key: 'interest', label: 'Interest Income' }
  ]},
  tax: { title: 'Withholdings', icon: Calculator, fields: [
    { key: 'fedWith', label: 'Your Federal Withheld' },
    { key: 'stateWith', label: 'Your State Withheld' },
    { key: 'spouseFedWith', label: 'Spouse Federal Withheld' },
    { key: 'spouseStateWith', label: 'Spouse State Withheld' }
  ]},
  prior: { title: 'Prior Year (Safe Harbor)', icon: Shield, fields: [
    { key: 'priorTax', label: 'Prior Year Tax' },
    { key: 'priorAgi', label: 'Prior Year AGI' }
  ]}
};

export const fedBrackets = [
  { min: 0, max: 23200, rate: 0.10 },
  { min: 23200, max: 94300, rate: 0.12 },
  { min: 94300, max: 201050, rate: 0.22 },
  { min: 201050, max: 383900, rate: 0.24 },
  { min: 383900, max: 487450, rate: 0.32 },
  { min: 487450, max: 731200, rate: 0.35 },
  { min: 731200, max: Infinity, rate: 0.37 }
];

export const caBrackets = [
  { min: 0, max: 23942, rate: 0.01 },
  { min: 23942, max: 56742, rate: 0.02 },
  { min: 56742, max: 88442, rate: 0.04 },
  { min: 88442, max: 122428, rate: 0.06 },
  { min: 122428, max: 154740, rate: 0.08 },
  { min: 154740, max: 186276, rate: 0.093 },
  { min: 186276, max: 1000000, rate: 0.103 },
  { min: 1000000, max: Infinity, rate: 0.113 }
];