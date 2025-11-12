
export default function list() {

    let arr = [
        {
            data: { name: 'task1', email: 'task2', age: 'task3' },
            edu: { a: 'edu1', b: 'edu2', c: 'edu3' }
        }];
    let people = [{
        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    }, {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    }, {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physici    st',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    }, {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
    }, {
        id: 4, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }];

    return (
        <div>
            <h1>Task List</h1>

            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Age</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Edu A</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Edu B</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Edu C</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((value) => (
                        // <tr key={value.data.email}>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{value.data.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{value.data.email}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{value.data.age}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{value.edu.a}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{value.edu.b}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{value.edu.c}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h2>Famous People in STEM</h2>
                {people.map((per) => (
                    <div key={per.id}>
                        <h3>{per.name}</h3>
                        <p><strong>Profession:</strong> {per.profession}</p>
                        <p><strong>Accomplishment:</strong> {per.accomplishment}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}