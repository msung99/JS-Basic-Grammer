
const iveMembers = [
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '장원영',
        year: 2004,
    },
    {
        name: '리즈',
        year: 2001,
    }
]

const btsMembers = [
    {
        name: '진',
        year: 1999,
    },
    {
        name: '정국',
        year: 1998,
    },
    {
        name: '몰라',
        year: 1993,
    }
]


class Country {
    name;
    idolGroups;

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

class IdolGroup {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

class Idol {
    name; 
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdol extends Idol {
    sing() {
        return `${this.name}이 노래를 합니다.`;
    }
}

class MaleIdol extends Idol {
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const cIveMembers = iveMembers.map(
    (x) => new FemaleIdol(x['name'], x['year']),
);
console.log(cIveMembers);

const cBtsMembers = btsMembers.map(
    (x) => new MaleIdol(x['name'], x['year']),
);
console.log(cBtsMembers);


const iveGroup = new IdolGroup(
    '아이브',
    cIveMembers,
)

const btsGroup = new IdolGroup(
    'BTS',
    cBtsMembers,
)

const allTogether = new Country (
    '대한민국',
    [
        new IdolGroup(
            '아이브',
            iveMembers.map(
                (x) => new FemaleIdol(x['name'], x['year'])
            ),
        ),
        new IdolGroup(
            '방탄소년단',
            btsMembers.map(
                (x) => new MaleIdol(x['name'], x['year']),
            ),
        ),
    ],
);
console.log(allTogether);
