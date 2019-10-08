import { R5_Address } from './R5_Address'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Claim_Detail } from './R5_Claim_Detail'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_Claim_Item      extends R5_BackboneElement
{

   static def : string = 'Claim_Item';
   sequence : string ;
   careTeamSequence : string [];
   diagnosisSequence : string [];
   procedureSequence : string [];
   informationSequence : string [];
   revenue : R5_CodeableConcept ;
   category : R5_CodeableConcept ;
   productOrService : R5_CodeableConcept ;
   modifier : R5_CodeableConcept [];
   programCode : R5_CodeableConcept [];
   servicedDate : string ;
   servicedPeriod : R5_Period ;
   locationCodeableConcept : R5_CodeableConcept ;
   locationAddress : R5_Address ;
   locationReference : R5_Reference ;
   quantity : R5_Quantity ;
   unitPrice : R5_Money ;
   factor : string ;
   net : R5_Money ;
   udi : R5_Reference [];
   bodySite : R5_CodeableConcept ;
   subSite : R5_CodeableConcept [];
   encounter : R5_Reference [];
   detail : R5_Claim_Detail [];
}
