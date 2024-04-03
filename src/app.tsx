import AttendeeList from "./components/attendee-list"
import Header from "./components/header"

function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 space-y-4">
      <Header />

      <AttendeeList />
    </div>
  )
}

export default App
