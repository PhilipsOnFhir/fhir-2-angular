import { STU3_Address } from './STU3_Address'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExplanationOfBenefit_Adjudication } from './STU3_ExplanationOfBenefit_Adjudication'
import { STU3_ExplanationOfBenefit_Detail } from './STU3_ExplanationOfBenefit_Detail'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ExplanationOfBenefit_Item      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Item';
   sequence : string ;
   careTeamLinkId : string [];
   diagnosisLinkId : string [];
   procedureLinkId : string [];
   informationLinkId : string [];
   revenue : STU3_CodeableConcept ;
   category : STU3_CodeableConcept ;
   service : STU3_CodeableConcept ;
   modifier : STU3_CodeableConcept [];
   programCode : STU3_CodeableConcept [];
   servicedDate : string ;
   servicedPeriod : STU3_Period ;
   locationCodeableConcept : STU3_CodeableConcept ;
   locationAddress : STU3_Address ;
   locationReference : STU3_Reference ;
   quantity : STU3_Quantity ;
   unitPrice : string ;
   factor : string ;
   net : string ;
   udi : STU3_Reference [];
   bodySite : STU3_CodeableConcept ;
   subSite : STU3_CodeableConcept [];
   encounter : STU3_Reference [];
   noteNumber : string [];
   adjudication : STU3_ExplanationOfBenefit_Adjudication [];
   detail : STU3_ExplanationOfBenefit_Detail [];
}
