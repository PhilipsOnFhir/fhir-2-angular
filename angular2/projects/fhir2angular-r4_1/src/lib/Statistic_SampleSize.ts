import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Statistic_SampleSize      extends BackboneElement
{

   static def : string = 'Statistic_SampleSize';
   description : string ;
   note : Annotation [];
   numberOfStudies : string ;
   numberOfParticipants : string ;
   knownDataCount : string ;
   numeratorCount : string ;
}
