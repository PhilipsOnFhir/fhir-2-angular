import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Schedule      extends R4_DomainResource
{

   static def : string = 'Schedule';
   identifier : R4_Identifier [];
   active : boolean ;
   serviceCategory : R4_CodeableConcept [];
   serviceType : R4_CodeableConcept [];
   specialty : R4_CodeableConcept [];
   actor : R4_Reference [];
   planningHorizon : R4_Period ;
   comment : string ;
}
