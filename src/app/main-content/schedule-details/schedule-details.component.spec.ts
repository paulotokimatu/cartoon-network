import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDetailsComponent } from './schedule-details.component';
import { ScheduleDetailsModalComponent } from './schedule-details-modal/schedule-details-modal.component';
import { ScheduleService } from '../schedule/schedule.service';

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
}

describe('ScheduleDetailsComponent', () => {
  let component: ScheduleDetailsComponent;
  let fixture: ComponentFixture<ScheduleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDetailsComponent, ScheduleDetailsModalComponent ],
      providers: [ ScheduleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give container the color-a if hour % 3 === 0', () => {
    let colorClass = component.containerColor(0);

    expect(colorClass).toBe('container-schedule-details--a');
  });

  it('should give container the color-b if hour % 3 === 1', () => {
    let colorClass = component.containerColor(1);

    expect(colorClass).toBe('container-schedule-details--b');
  });

  it('should give container the color-c if hour % 3 === 2', () => {
    let colorClass = component.containerColor(2);

    expect(colorClass).toBe('container-schedule-details--c');
  });

  it('should receive details of all cartoons', () => {
    const mockData = mockCartoonsDetails;
    let service = new ScheduleService();    

    spyOn(service, 'getAllCartoonsDetails').and.returnValue(mockData);

    component.ngOnInit();

    expect(component.allCartoonsSchedule.regularShow).toBeTruthy();
  });

  it('should get specific details of one cartoon by its cartoonId', () => {
    const mockData = mockCartoonsDetails;
    let service = new ScheduleService();    

    spyOn(service, 'getCartoonDetails').and.callFake((cartoonId) => {
      return mockCartoonsDetails[cartoonId];
    });

    component.onOpenScheduleDetailsModal('regularShow');
    
    expect(component.selectedCartoon.titlePt).toBe('Apenas Um Show');
  });
});
