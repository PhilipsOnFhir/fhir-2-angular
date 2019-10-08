import { R4_Attachment } from './R4_Attachment'
import { R4_ClaimProcessingCodesEnum } from './R4_ClaimProcessingCodesEnum'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExplanationOfBenefitStatusEnum } from './R4_ExplanationOfBenefitStatusEnum'
import { R4_ExplanationOfBenefit_Accident } from './R4_ExplanationOfBenefit_Accident'
import { R4_ExplanationOfBenefit_AddItem } from './R4_ExplanationOfBenefit_AddItem'
import { R4_ExplanationOfBenefit_Adjudication } from './R4_ExplanationOfBenefit_Adjudication'
import { R4_ExplanationOfBenefit_BenefitBalance } from './R4_ExplanationOfBenefit_BenefitBalance'
import { R4_ExplanationOfBenefit_CareTeam } from './R4_ExplanationOfBenefit_CareTeam'
import { R4_ExplanationOfBenefit_Diagnosis } from './R4_ExplanationOfBenefit_Diagnosis'
import { R4_ExplanationOfBenefit_Insurance } from './R4_ExplanationOfBenefit_Insurance'
import { R4_ExplanationOfBenefit_Item } from './R4_ExplanationOfBenefit_Item'
import { R4_ExplanationOfBenefit_Payee } from './R4_ExplanationOfBenefit_Payee'
import { R4_ExplanationOfBenefit_Payment } from './R4_ExplanationOfBenefit_Payment'
import { R4_ExplanationOfBenefit_Procedure } from './R4_ExplanationOfBenefit_Procedure'
import { R4_ExplanationOfBenefit_ProcessNote } from './R4_ExplanationOfBenefit_ProcessNote'
import { R4_ExplanationOfBenefit_Related } from './R4_ExplanationOfBenefit_Related'
import { R4_ExplanationOfBenefit_SupportingInfo } from './R4_ExplanationOfBenefit_SupportingInfo'
import { R4_ExplanationOfBenefit_Total } from './R4_ExplanationOfBenefit_Total'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_UseEnum } from './R4_UseEnum'

export class R4_ExplanationOfBenefit      extends R4_DomainResource
{

   static def : string = 'ExplanationOfBenefit';
   identifier : R4_Identifier [];
   status : R4_ExplanationOfBenefitStatusEnum ;
   type : R4_CodeableConcept ;
   subType : R4_CodeableConcept ;
   use : R4_UseEnum ;
   patient : R4_Reference ;
   billablePeriod : R4_Period ;
   created : string ;
   enterer : R4_Reference ;
   insurer : R4_Reference ;
   provider : R4_Reference ;
   priority : R4_CodeableConcept ;
   fundsReserveRequested : R4_CodeableConcept ;
   fundsReserve : R4_CodeableConcept ;
   related : R4_ExplanationOfBenefit_Related [];
   prescription : R4_Reference ;
   originalPrescription : R4_Reference ;
   payee : R4_ExplanationOfBenefit_Payee ;
   referral : R4_Reference ;
   facility : R4_Reference ;
   claim : R4_Reference ;
   claimResponse : R4_Reference ;
   outcome : R4_ClaimProcessingCodesEnum ;
   disposition : string ;
   preAuthRef : string [];
   preAuthRefPeriod : R4_Period [];
   careTeam : R4_ExplanationOfBenefit_CareTeam [];
   supportingInfo : R4_ExplanationOfBenefit_SupportingInfo [];
   diagnosis : R4_ExplanationOfBenefit_Diagnosis [];
   procedure : R4_ExplanationOfBenefit_Procedure [];
   precedence : string ;
   insurance : R4_ExplanationOfBenefit_Insurance [];
   accident : R4_ExplanationOfBenefit_Accident ;
   item : R4_ExplanationOfBenefit_Item [];
   addItem : R4_ExplanationOfBenefit_AddItem [];
   adjudication : R4_ExplanationOfBenefit_Adjudication [];
   total : R4_ExplanationOfBenefit_Total [];
   payment : R4_ExplanationOfBenefit_Payment ;
   formCode : R4_CodeableConcept ;
   form : R4_Attachment ;
   processNote : R4_ExplanationOfBenefit_ProcessNote [];
   benefitPeriod : R4_Period ;
   benefitBalance : R4_ExplanationOfBenefit_BenefitBalance [];
}
