import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Schedule      extends R5_DomainResource
{

   static def : string = 'Schedule';
   identifier : R5_Identifier [];
   active : boolean ;
   serviceCategory : R5_CodeableConcept [];
   serviceType : R5_CodeableConcept [];
   specialty : R5_CodeableConcept [];
   actor : R5_Reference [];
   planningHorizon : R5_Period ;
   comment : string ;
}
