import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Schedule      extends R4_1_DomainResource
{

   static def : string = 'Schedule';
   identifier : R4_1_Identifier [];
   active : boolean ;
   serviceCategory : R4_1_CodeableConcept [];
   serviceType : R4_1_CodeableConcept [];
   specialty : R4_1_CodeableConcept [];
   actor : R4_1_Reference [];
   planningHorizon : R4_1_Period ;
   comment : string ;
}
