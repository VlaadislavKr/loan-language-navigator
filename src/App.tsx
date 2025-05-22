
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import EstonianHome from "./pages/et/EstonianHome";
import EstonianCredits from "./pages/et/EstonianCredits";
import EstonianAbout from "./pages/et/EstonianAbout";
import EstonianPrivacy from "./pages/et/EstonianPrivacy";
import RussianEstonianHome from "./pages/et-ru/RussianEstonianHome";
import RussianEstonianCredits from "./pages/et-ru/RussianEstonianCredits";
import RussianEstonianAbout from "./pages/et-ru/RussianEstonianAbout";
import RussianEstonianPrivacy from "./pages/et-ru/RussianEstonianPrivacy";

// Создаем instance QueryClient вне компонента для SSR совместимости
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Оптимизация для SSR
      refetchOnMount: false,       // Оптимизация для SSR
      staleTime: 1000 * 60 * 5,    // 5 минут - данные считаются свежими
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Английская версия (без префикса) */}
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/vladislav-kotkas-cv" element={<CV />} />
          
          {/* Эстонская версия (et) */}
          <Route path="/et" element={<EstonianHome />} />
          <Route path="/et/laenud" element={<EstonianCredits />} />
          <Route path="/et/meist" element={<EstonianAbout />} />
          <Route path="/et/privaatsus" element={<EstonianPrivacy />} />
          
          {/* Русскоязычная версия для Эстонии (et-ru) */}
          <Route path="/et-ru" element={<RussianEstonianHome />} />
          <Route path="/et-ru/kredity" element={<RussianEstonianCredits />} />
          <Route path="/et-ru/o-nas" element={<RussianEstonianAbout />} />
          <Route path="/et-ru/konfidentsialnost" element={<RussianEstonianPrivacy />} />
          
          {/* Добавьте все пользовательские маршруты выше маршрута перехвата "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
