import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
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
import MidtermPrep from "./pages/MidtermPrep";
import RotationalKinematics from "./pages/RotationalKinematics";
import TorquePage from "./pages/Torque";
import RotationalEnergy from "./pages/RotationalEnergy";
import AngularMomentum from "./pages/AngularMomentum";
import SimpleHarmonicMotion from "./pages/SimpleHarmonicMotion";
import WavesMusic from "./pages/WavesMusic";
import Fluids from "./pages/Fluids";
import MockExam from "./pages/MockExam";
import EELanding from "./pages/ee/EELanding";
import BitwiseNumbers from "./pages/ee/BitwiseNumbers";
import MicrocontrollerIO from "./pages/ee/MicrocontrollerIO";
import DcCircuits from "./pages/ee/DcCircuits";
import LabEquipment from "./pages/ee/LabEquipment";
import UsbCPower from "./pages/ee/UsbCPower";
import Adc from "./pages/ee/Adc";
import OpAmps from "./pages/ee/OpAmps";
import SpiceSimulation from "./pages/ee/SpiceSimulation";
import EeFormulaSheet from "./pages/ee/EeFormulaSheet";
import EeMockExam from "./pages/ee/EeMockExam";
import EeDrill from "./pages/ee/EeDrill";
import SuperCheatSheet from "./pages/SuperCheatSheet";
import SuperMockExam from "./pages/SuperMockExam";
import MidtermDrill from "./pages/ee/MidtermDrill";
import MidtermMockExam from "./pages/ee/MidtermMockExam";
import QuizRetake from "./pages/ee/QuizRetake";
// AMS 161 Calc II
import MathLanding from "./pages/math/Math";
import Ch5Integration from "./pages/math/Ch5Integration";
import Ch6Applications from "./pages/math/Ch6Applications";
import Ch7DiffEq from "./pages/math/Ch7DiffEq";
import Ch8Series from "./pages/math/Ch8Series";
import MathCheatSheet from "./pages/math/MathCheatSheet";
import MathDrill from "./pages/math/MathDrill";
import MathMockExam1 from "./pages/math/MathMockExam1";
import MathMockExam2 from "./pages/math/MathMockExam2";
import MathFinalBoss from "./pages/math/MathFinalBoss";
// CSE 114 Intro to OOP (Java)
import CSE114Landing from "./pages/cse114/CSE114Landing";
import ExamSimulator from "./pages/cse114/ExamSimulator";
import TrapBrowser from "./pages/cse114/TrapBrowser";
import TrapDrill from "./pages/cse114/TrapDrill";
import LearnHub from "./pages/cse114/LearnHub";
import LecturePage from "./pages/cse114/LecturePage";
import SchedulePage from "./pages/cse114/SchedulePage";
import ScheduleSettings from "./pages/cse114/ScheduleSettings";

// Alias Tension as CoupledSystems for routing
const CoupledSystems = Tension;

// Vite's BASE_URL is "/" in dev and "/day1_mechanics_mastery/" on GitHub Pages.
// wouter wants the base WITHOUT a trailing slash ("" at root), so strip it.
const ROUTER_BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function Router() {
  return (
    <WouterRouter base={ROUTER_BASE}>
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
      {/* PHY 131 Midterm Prep modules */}
      <Route path={"/midterm-prep"} component={MidtermPrep} />
      <Route path={"/rotational-kinematics"} component={RotationalKinematics} />
      <Route path={"/torque"} component={TorquePage} />
      <Route path={"/rotational-energy"} component={RotationalEnergy} />
      <Route path={"/angular-momentum"} component={AngularMomentum} />
      <Route path={"/shm"} component={SimpleHarmonicMotion} />
      <Route path={"/waves-music"} component={WavesMusic} />
      <Route path={"/fluids"} component={Fluids} />
      <Route path={"/mock-exam"} component={MockExam} />
      {/* ESE 123 Final Exam Prep */}
      <Route path={"/ee"} component={EELanding} />
      <Route path={"/ee/bitwise-numbers"} component={BitwiseNumbers} />
      <Route path={"/ee/microcontroller-io"} component={MicrocontrollerIO} />
      <Route path={"/ee/dc-circuits"} component={DcCircuits} />
      <Route path={"/ee/lab-equipment"} component={LabEquipment} />
      <Route path={"/ee/usb-c-power"} component={UsbCPower} />
      <Route path={"/ee/adc"} component={Adc} />
      <Route path={"/ee/op-amps"} component={OpAmps} />
      <Route path={"/ee/spice-simulation"} component={SpiceSimulation} />
      <Route path={"/ee/formula-sheet"} component={EeFormulaSheet} />
      <Route path={"/ee/mock-exam"} component={EeMockExam} />
      <Route path={"/ee/drill"} component={EeDrill} />
      <Route path={"/ee/midterm-drill"} component={MidtermDrill} />
      <Route path={"/ee/midterm-mock"} component={MidtermMockExam} />
      <Route path={"/ee/quiz-retake"} component={QuizRetake} />
      <Route path={"/cheat-sheet"} component={SuperCheatSheet} />
      <Route path={"/super-mock-exam"} component={SuperMockExam} />
      {/* AMS 161 Calc II */}
      <Route path={"/math"} component={MathLanding} />
      <Route path={"/math/integration"} component={Ch5Integration} />
      <Route path={"/math/applications"} component={Ch6Applications} />
      <Route path={"/math/diff-eq"} component={Ch7DiffEq} />
      <Route path={"/math/series"} component={Ch8Series} />
      <Route path={"/math/cheat-sheet"} component={MathCheatSheet} />
      <Route path={"/math/drill"} component={MathDrill} />
      <Route path={"/math/mock-exam-1"} component={MathMockExam1} />
      <Route path={"/math/mock-exam-2"} component={MathMockExam2} />
      <Route path={"/math/final-boss"} component={MathFinalBoss} />
      {/* CSE 114 Intro to OOP (Java) */}
      <Route path={"/cse114"} component={CSE114Landing} />
      <Route path={"/cse114/learn"} component={LearnHub} />
      <Route path={"/cse114/learn/:lectureId"} component={LecturePage} />
      <Route path={"/cse114/sim/:examId"} component={ExamSimulator} />
      <Route path={"/cse114/traps"} component={TrapBrowser} />
      <Route path={"/cse114/drill/gotcha/:gotcha"} component={TrapDrill} />
      <Route path={"/cse114/drill"} component={TrapDrill} />
      <Route path={"/cse114/schedule/settings"} component={ScheduleSettings} />
      <Route path={"/cse114/schedule"} component={SchedulePage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </WouterRouter>
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
