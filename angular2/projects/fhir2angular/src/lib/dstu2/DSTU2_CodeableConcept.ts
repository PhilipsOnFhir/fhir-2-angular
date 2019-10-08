import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_CodeableConcept      extends DSTU2_Element
{

   static def : string = 'CodeableConcept';
   coding : DSTU2_Coding [];
   text : string ;
}
