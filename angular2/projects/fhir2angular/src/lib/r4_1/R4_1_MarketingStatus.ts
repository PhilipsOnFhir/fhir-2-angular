import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_MarketingStatus      extends R4_1_BackboneElement
{

   static def : string = 'MarketingStatus';
   country : R4_1_CodeableConcept ;
   jurisdiction : R4_1_CodeableConcept ;
   status : R4_1_CodeableConcept ;
   dateRange : R4_1_Period ;
   restoreDate : string ;
}
