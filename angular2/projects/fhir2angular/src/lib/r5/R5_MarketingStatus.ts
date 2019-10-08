import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_MarketingStatus      extends R5_BackboneElement
{

   static def : string = 'MarketingStatus';
   country : R5_CodeableConcept ;
   jurisdiction : R5_CodeableConcept ;
   status : R5_CodeableConcept ;
   dateRange : R5_Period ;
   restoreDate : string ;
}
