import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'

export class R4_MarketingStatus      extends R4_BackboneElement
{

   static def : string = 'MarketingStatus';
   country : R4_CodeableConcept ;
   jurisdiction : R4_CodeableConcept ;
   status : R4_CodeableConcept ;
   dateRange : R4_Period ;
   restoreDate : string ;
}
