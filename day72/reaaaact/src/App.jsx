const App = () => {
  let num = 101;
  let str = "Hello World";
  let bul = true;
  let nul = null;
  let undef = undefined;
  let arr = [<span key="ar0">Hello Span!!</span>, 12, "1122", "Well_String_Hello", true, null, undefined];
  let profiles = [
    {
      name: "Subh",
      age: 20
    },
    {
      name: "VS Code",
      age: 10000
    },
    {
      name: "Who",
      age: "when"
    }
  ]

  let updatedProfiles = profiles.map((profile, idx) => {
    return (
        <li key={`Profile-${idx}`}>Name: {profile.name} || Age: {profile.age}</li>
    );
  })
  return (
    <main className="main">
      <h1><strong>Datatypes</strong></h1>
      <h3>Number: {num}</h3>
      <h3>String: {str}</h3>
      <h2>&lt;!-- Now this datatypes will not show in view!! --&gt;</h2>
      <h3>Bool: {bul}</h3>
      <h3>Null: {nul}</h3>
      <h3>Undefined: {undef}</h3>
      <h3>Array: {arr}</h3>
      <h3>Objects can't be shown directly</h3>
      <h2>Rendering JSON:</h2>
      <ol>{updatedProfiles}</ol>
    </main>
  );
};


export default App;