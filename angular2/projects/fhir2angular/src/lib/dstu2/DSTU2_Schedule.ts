import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Schedule      extends DSTU2_DomainResource
{

   static def : string = 'Schedule';
   identifier : DSTU2_Identifier [];
   type : DSTU2_CodeableConcept [];
   actor : DSTU2_Reference ;
   planningHorizon : DSTU2_Period ;
   comment : string ;
}
