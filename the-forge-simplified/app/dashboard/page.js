export default function Dashboard() {
  // Sample generated scenes data
  const generatedScenes = [
    {
      id: 1,
      title: "Rooftop Chase",
      date: "May 5, 2025",
      content: "Alex sprints across the rain-slicked rooftop, boots splashing through puddles as the helicopter's searchlight cuts through the night behind him. The edge approaches fast—too fast. With no time to stop, he leaps into the darkness, arms outstretched toward the adjacent building. His fingers catch the rusty fire escape, metal groaning under the sudden weight. Below, police sirens wail as he pulls himself up, disappearing into the shadows just as the spotlight sweeps over his last position."
    },
    {
      id: 2,
      title: "Bar Fight",
      date: "May 3, 2025",
      content: "The whiskey glass shatters against the wall as Maya ducks, fragments raining down on the worn wooden floor. The biker lunges forward, meaty fist aimed at her jaw. She pivots, using his momentum against him, and drives her elbow into his solar plexus. He doubles over with a grunt. In one fluid motion, she grabs the back of his leather vest and slams his face into the bar top. The room falls silent except for the jukebox still playing a melancholy country tune."
    },
    {
      id: 3,
      title: "Desert Standoff",
      date: "April 30, 2025",
      content: "Heat waves distort the horizon as Rodriguez and the mercenaries face each other across the cracked desert floor. His hand hovers near his holster, sweat trickling down his temple. The leader smirks, gold tooth glinting in the merciless sun. A hawk screeches overhead—the only warning before both sides draw. Rodriguez dives behind a boulder as bullets kick up dust around him. He chambers a round, takes a deep breath, and returns fire."
    }
  ];

  return (
    <div>
      <h1>Your Generated Scenes</h1>
      <p>View and manage your previously generated action scenes.</p>
      
      <div className="scenes-container">
        {generatedScenes.map(scene => (
          <div key={scene.id} className="scene-card">
            <h3>{scene.title}</h3>
            <div className="scene-meta">
              <span>Created: {scene.date}</span>
              <span>Scene ID: {scene.id}</span>
            </div>
            <div className="scene-content">
              <p>{scene.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
