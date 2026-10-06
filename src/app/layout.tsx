import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata={title:'AventIQ — Student Opportunity Intelligence',description:'Discover student opportunities that fit you.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<Analytics /></body></html>}
