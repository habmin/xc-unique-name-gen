function parseData(stringData, source) {
    const lines = stringData.trim().split('\n');

    const epithets = new Set();
    const names = new Set();

    lines.forEach(line => {
        const columns = line.split(' \t');
        const monster = columns[0];
        const parts = monster.split(' ');
        let name = parts.pop();
        if (name === 'Jr.') {
            name = parts.pop() + ' Jr.';
        }
        const epithet = parts.join(' ');
        epithets.add(epithet);
        names.add(name);
    });

    return { epithets: epithets, names: names, source: source };
}

function createArrayFromSets(...jsonSets) {
    const epitethsMap = new Map();
    const namesMap = new Map();
    jsonSets.forEach(setObj => {
        setObj.epithets.forEach(epithet => {
            if (!epitethsMap.has(epithet)) {
                epitethsMap.set(epithet, [epithet, setObj.source]);
            }
        });
        setObj.names.forEach(name => {
            if (!namesMap.has(name)) {
                namesMap.set(name, [name, setObj.source]);
            }
        });
    });

    return {
        epithets: Array.from(epitethsMap.values()),
        names: Array.from(namesMap.values())
    };
}

export { parseData, createArrayFromSets };