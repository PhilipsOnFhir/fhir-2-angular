import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Schedule      extends STU3_DomainResource
{

   static def : string = 'Schedule';
   identifier : STU3_Identifier [];
   active : boolean ;
   serviceCategory : STU3_CodeableConcept ;
   serviceType : STU3_CodeableConcept [];
   specialty : STU3_CodeableConcept [];
   actor : STU3_Reference [];
   planningHorizon : STU3_Period ;
   comment : string ;
}
