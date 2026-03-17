import OrderSuccess from "@/components/order/OrderSuccess";
import OrderActions from "@/components/order/OrderActions";
 
 export default function OrderConfirmationPage() {
     return (
         <main className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
             {/* Background Ethereal Elements */}
             <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-dream-mint/5 blur-[120px] rounded-full animate-slow-zoom pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-dream-peach/5 blur-[120px] rounded-full animate-slow-zoom [animation-delay:4s] pointer-events-none" />
 
             <div className="container mx-auto px-6 relative z-10">
                 <OrderSuccess />
                 <OrderActions />
             </div>
         </main>
     );
 }
