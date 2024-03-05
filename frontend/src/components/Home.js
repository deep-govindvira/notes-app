export const Home = () => {
    return (
        <div style={{
            marginTop: '50px'
        }} class='d-flex flex-column justify-content-center'>
            <div class='d-flex justify-content-center'>
                <img src='/note.png' width={'50px'} height={'50px'} style={{
                    marginRight:'30px'
                }}></img>
                <h1>Welcome to Note Application</h1>
                <img src='/note.png' width={'50px'} height={'50px'} style={{
                    marginLeft:'30px'
                }}></img>
            </div>
            <div style={{
            marginTop: '25px'
        }} class='d-flex justify-content-center'>
                <ul class="list-group" style={{
                    fontSize:'20px',
                    marginTop:'40px'
                }}>
                    <li class="list-group-item">Create notes with title, description and colorful background</li>
                    <li class="list-group-item">See all notes overview in one page</li>
                    <li class="list-group-item">Search particular note from notes</li>
                    <li class="list-group-item">Update notes and save</li>
                    <li class="list-group-item">Throw unnecessary notes to dustbin</li>
                    <li class="list-group-item">Retrieve notes from dustbin</li>
                </ul>
            </div>
            <div style={{
            marginBottom: '25px'
        }} class='d-flex justify-content-center fixed-bottom'>
            <h1>
                🤗 Deep Govindvira 🥵
            </h1>
            </div>
        </div>
    )
}