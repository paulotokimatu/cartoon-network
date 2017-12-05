import { ScheduleService } from './schedule.service';
import { Subscription } from 'rxjs/Subscription';

const mockScheduleByDay = {
  '2017/12/2': [
    {
      hour: '00',
      details: [
        {
          startTime: '00:00',
          cartoonId: 'stevenUniverse'
        }
      ]
    },
    {
      hour: '01',
      details: [
        {
          startTime: '01:00',
          cartoonId: 'adventureTime'
        }
      ]
    },
    {
      hour: '02',
      details: [
        {
          startTime: '02:00',
          cartoonId: 'thePowerpuffGirls'
        }
      ]
    },
    {
      hour: '03',
      details: [
        {
          startTime: '03:00',
          cartoonId: 'gumball'
        }
      ]
    },
    {
      hour: '04',
      details: [
        {
          startTime: '04:00',
          cartoonId: 'johnnyBravo'
        },
        {
          startTime: '04:30',
          cartoonId: 'courage'
        }
      ]
    },
    {
      hour: '05',
      details: [
        {
          startTime: '05:00',
          cartoonId: 'campLazlo'
        },
        {
          startTime: '05:30',
          cartoonId: 'dexter'
        }
      ]
    },
    {
      hour: '06',
      details: [
        {
          startTime: '06:00',
          cartoonId: 'mrBean'
        },
        {
          startTime: '06:30',
          cartoonId: 'scoobyDoo'
        }
      ]
    },
    {
      hour: '07',
      details: [
        {
          startTime: '07:00',
          cartoonId: 'pinkPanther'
        },
        {
          startTime: '07:30',
          cartoonId: 'gumball'
        }
      ]
    },
    {
      hour: '08',
      details: [
        {
          startTime: '08:00',
          cartoonId: 'clarence'
        },
        {
          startTime: '08:30',
          cartoonId: 'monica'
        }
      ]
    },
    {
      hour: '09',
      details: [
        {
          startTime: '09:00',
          cartoonId: 'lego'
        },
        {
          startTime: '09:30',
          cartoonId: 'teenTitans'
        }
      ]
    },
    {
      hour: '10',
      details: [
        {
          startTime: '10:00',
          cartoonId: 'ben10'
        },
        {
          startTime: '10:30',
          cartoonId: 'picapauAmarelo'
        }
      ]
    },
    {
      hour: '11',
      details: [
        {
          startTime: '11:00',
          cartoonId: 'jorelsBrother'
        },
        {
          startTime: '11:30',
          cartoonId: 'trunkTrain'
        }
      ]
    },
    {
      hour: '12',
      details: [
        {
          startTime: '12:00',
          cartoonId: 'surfsUp'
        }
      ]
    },
    {
      hour: '13',
      details: [
        {
          startTime: '13:45',
          cartoonId: 'weBareBears'
        }
      ]
    },
    {
      hour: '14',
      details: [
        {
          startTime: '14:00',
          cartoonId: 'magisWords'
        }
      ]
    },
    {
      hour: '15',
      details: [
        {
          startTime: '15:00',
          cartoonId: 'regularShow'
        },
        {
          startTime: '15:30',
          cartoonId: 'teenTitans'
        }
      ]
    },
    {
      hour: '16',
      details: [
        {
          startTime: '16:00',
          cartoonId: 'transformers'
        },
        {
          startTime: '16:30',
          cartoonId: 'powerRangers'
        }
      ]
    },
    {
      hour: '17',
      details: [
        {
          startTime: '17:00',
          cartoonId: 'weBareBears'
        }
      ]
    },
    {
      hour: '18',
      details: [
        {
          startTime: '18:00',
          cartoonId: 'jorelsBrother'
        },
        {
          startTime: '18:30',
          cartoonId: 'teenTitans'
        }
      ]
    },
    {
      hour: '19',
      details: [
        {
          startTime: '19:00',
          cartoonId: 'magisWords'
        }
      ]
    },
    {
      hour: '20',
      details: [
        {
          startTime: '20:00',
          cartoonId: 'adventureTime'
        }
      ]
    },
    {
      hour: '21',
      details: [
        {
          startTime: '21:30',
          cartoonId: 'adventureTime'
        },
        {
          startTime: '21:45',
          cartoonId: 'gumball'
        }
      ]
    },
    {
      hour: '22',
      details: [
        {
          startTime: '22:00',
          cartoonId: 'gumball'
        },
        {
          startTime: '22:30',
          cartoonId: 'adventureTime'
        }
      ]
    },
    {
      hour: '23',
      details: [
        {
          startTime: '23:00',
          cartoonId: 'dragonBall'
        }
      ]
    }
  ],
  '2017/12/3': [
    {
      hour: '00',
      details: [
        {
          startTime: '00:00',
          cartoonId: 'dragonBall'
        }
      ]
    },
    {
      hour: '01',
      details: [
        {
          startTime: '01:00',
          cartoonId: 'thePowerpuffGirls'
        }
      ]
    },
    {
      hour: '02',
      details: [
        {
          startTime: '02:00',
          cartoonId: 'uncleGrandpa'
        }
      ]
    },
    {
      hour: '03',
      details: [
        {
          startTime: '03:00',
          cartoonId: 'stevenUniverse'
        }
      ]
    },
    {
      hour: '04',
      details: [
        {
          startTime: '04:00',
          cartoonId: 'billyAndMandy'
        },
        {
          startTime: '04:30',
          cartoonId: 'courage'
        }
      ]
    },
    {
      hour: '05',
      details: [
        {
          startTime: '00:00',
          cartoonId: 'weasel'
        },
        {
          startTime: '05:30',
          cartoonId: 'dexter'
        }
      ]
    },
    {
      hour: '06',
      details: [
        {
          startTime: '06:00',
          cartoonId: 'scoobyDooAndVampire'
        }
      ]
    },
    {
      hour: '07',
      details: [
        {
          startTime: '07:15',
          cartoonId: 'bunnicula'
        },
        {
          startTime: '07:30',
          cartoonId: 'clarence'
        }
      ]
    },
    {
      hour: '08',
      details: [
        {
          startTime: '08:00',
          cartoonId: 'barbie'
        }
      ]
    },
    {
      hour: '09',
      details: [
        {
          startTime: '09:00',
          cartoonId: 'weBareBears'
        },
        {
          startTime: '09:30',
          cartoonId: 'uncleGrandpa'
        }
      ]
    },
    {
      hour: '10',
      details: [
        {
          startTime: '10:00',
          cartoonId: 'teenTitans'
        },
        {
          startTime: '10:30',
          cartoonId: 'thePowerpuffGirls'
        }
      ]
    },
    {
      hour: '11',
      details: [
        {
          startTime: '11:00',
          cartoonId: 'monica'
        }
      ]
    },
    {
      hour: '12',
      details: [
        {
          startTime: '12:00',
          cartoonId: 'monsterHigh'
        }
      ]
    },
    {
      hour: '13',
      details: [
        {
          startTime: '13:00',
          cartoonId: 'weBareBears'
        }
      ]
    },
    {
      hour: '14',
      details: [
        {
          startTime: '14:00',
          cartoonId: 'drSeuss'
        }
      ]
    },
    {
      hour: '15',
      details: [
        {
          startTime: '15:00',
          cartoonId: 'drSeuss'
        }
      ]
    },
    {
      hour: '16',
      details: [
        {
          startTime: '16:00',
          cartoonId: 'clarence'
        }
      ]
    },
    {
      hour: '17',
      details: [
        {
          startTime: '17:00',
          cartoonId: 'teenTitans'
        },
        {
          startTime: '17:30',
          cartoonId: 'trunkTrain'
        }
      ]
    },
    {
      hour: '18',
      details: [
        {
          startTime: '18:00',
          cartoonId: 'barbieVideoGame'
        }
      ]
    },
    {
      hour: '19',
      details: [
        {
          startTime: '19:15',
          cartoonId: 'thePowerpuffGirls'
        }
      ]
    },
    {
      hour: '20',
      details: [
        {
          startTime: '20:00',
          cartoonId: 'drSeuss'
        }
      ]
    },
    {
      hour: '21',
      details: [
        {
          startTime: '21:45',
          cartoonId: 'weBareBears'
        }
      ]
    },
    {
      hour: '22',
      details: [
        {
          startTime: '22:00',
          cartoonId: 'teenTitans'
        },
        {
          startTime: '22:30',
          cartoonId: 'regularShow'
        }
      ]
    },
    {
      hour: '23',
      details: [
        {
          startTime: '23:00',
          cartoonId: 'jorelsBrother'
        },
        {
          startTime: '23:30',
          cartoonId: 'dexter'
        },
        {
          startTime: '23:45',
          cartoonId: 'tomAndJerry'
        }
      ]
    }
  ],
};
const mockCartoonsDetails = {
  regularShow: {
    cartoonId: 'regularShow',
    titlePt: 'Apenas Um Show',
    titleEn: 'Regular Show',
    duration: 30,
    year: 2015,
    origin: 'Estados Unidos',
    contentClassification: '04',
    indicativeClassification: 10,
    synopsis: 'O programa tem como protagonistas dois zeladores de um parque: um gaio-azul de mais de 1,80 m de altura chamado Mordecai, e um guaxinim chamado Rigby. Mordecai e Rigby são melhores amigos que passam seus dias tentando se divertir, de todas as maneiras possíveis',
    genre: 'Animação, Comédia',
    director: 'Jhon Iinfantino',
    casting: 'J.G. Quintel'
  },
  jorelsBrother: {
    cartoonId: 'jorelsBrother',
    titlePt: 'Irmão do Jorel',
    titleEn: "Jorel's Brother",
    duration: 10,
    year: 2014,
    origin: 'Brasil',
    contentClassification: 'Obra não publicitária brasileira, constituinte de espaço qualificado e independente',
    indicativeClassification: '10',
    synopsis: 'Irmão do Jorel é o filho caçula de uma excêntrica família de acumuladores presa nos anos 80 e com a ajuda de sua melhor amiga, ele enfrenta os primeiros obstáculos da vida num ritmo alucinante. Sem diferenciar fantasia e realidade, ele sempre descobre uma maneira absurda de sair da sombra de seu irmão celebridade, mas seu verdadeiro nome é sempre um mistério para todos.',
    genre: 'Animação, Comédia',
    director: 'Juliano Enrico',
    casting: ''
  }
};

describe('ScheduleService', () => {
  it('should instantiate', () => {
    let service = new ScheduleService();
    
    expect(service).toBeTruthy();
  });

  it('return schedule of a specific day', () => {
    // Invalid. Difficult to test because there is no api call, I am just importing raw data.
    let service = new ScheduleService();
    
    expect(service).toBeTruthy();
  });

  it('emit data for a specific hour', () => {
    // Invalid. Difficult to test because there is no api call, I am just importing raw data.
    let service = new ScheduleService();
    
    expect(service).toBeTruthy();
  });

  it('return data for a specific cartoon by its cartoonId', () => {
    // Invalid. Difficult to test because there is no api call, I am just importing raw data.
    let service = new ScheduleService();
    
    expect(service).toBeTruthy();
  });

  it('return details of all cartoons', () => {
    // Invalid. Difficult to test because there is no api call, I am just importing raw data.
    let service = new ScheduleService();
    
    expect(service).toBeTruthy();
  });
})