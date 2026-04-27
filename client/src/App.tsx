import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import InclinedPlanes from "./pages/InclinedPlanes";
import Friction from "./pages/Friction";
import Tension from "./pages/Tension";
import Energy from "./pages/Energy";
import Momentum from "./pages/Momentum";
import CircularMotion from "./pages/CircularMotion";
import Orbital from "./pages/Orbital";
import RotatingFrames from "./pages/RotatingFrames";
import Exercises from "./pages/Exercises";
import FormulaSheet from "./pages/FormulaSheet";
import IntegrationProblems from "./pages/IntegrationProblems";
import BatmanProblem from "./pages/BatmanProblem";
import RollerCoaster from "./pages/RollerCoaster";
import SatelliteCollision from "./pages/SatelliteCollision";
import FinalBoss from "./pages/FinalBoss";

// Alias Tension as CoupledSystems for routing
const CoupledSystems = Tension;

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/inclined-planes"} component={InclinedPlanes} />
      <Route path={"/friction"} component={Friction} />
      <Route path={"/tension"} component={Tension} />
      <Route path={"/coupled-systems"} component={CoupledSystems} />
      <Route path={"/energy"} component={Energy} />
      <Route path={"/momentum"} component={Momentum} />
      <Route path={"/circular-motion"} component={CircularMotion} />
      <Route path={"/orbital"} component={Orbital} />
      <Route path={"/rotating-frames"} component={RotatingFrames} />
      <Route path={"/exercises"} component={Exercises} />
      <Route path={"/formula-sheet"} component={FormulaSheet} />
      <Route path={"/integration-problems"} component={IntegrationProblems} />
      <Route path={"/batman-problem"} component={BatmanProblem} />
      <Route path={"/roller-coaster"} component={RollerCoaster} />
      <Route path={"/satellite-collision"} component={SatelliteCollision} />
      <Route path={"/final-boss"} component={FinalBoss} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
