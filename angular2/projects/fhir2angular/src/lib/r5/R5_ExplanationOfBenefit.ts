import { R5_Attachment } from './R5_Attachment'
import { R5_ClaimProcessingCodesEnum } from './R5_ClaimProcessingCodesEnum'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExplanationOfBenefitStatusEnum } from './R5_ExplanationOfBenefitStatusEnum'
import { R5_ExplanationOfBenefit_Accident } from './R5_ExplanationOfBenefit_Accident'
import { R5_ExplanationOfBenefit_AddItem } from './R5_ExplanationOfBenefit_AddItem'
import { R5_ExplanationOfBenefit_Adjudication } from './R5_ExplanationOfBenefit_Adjudication'
import { R5_ExplanationOfBenefit_BenefitBalance } from './R5_ExplanationOfBenefit_BenefitBalance'
import { R5_ExplanationOfBenefit_CareTeam } from './R5_ExplanationOfBenefit_CareTeam'
import { R5_ExplanationOfBenefit_Diagnosis } from './R5_ExplanationOfBenefit_Diagnosis'
import { R5_ExplanationOfBenefit_Insurance } from './R5_ExplanationOfBenefit_Insurance'
import { R5_ExplanationOfBenefit_Item } from './R5_ExplanationOfBenefit_Item'
import { R5_ExplanationOfBenefit_Payee } from './R5_ExplanationOfBenefit_Payee'
import { R5_ExplanationOfBenefit_Payment } from './R5_ExplanationOfBenefit_Payment'
import { R5_ExplanationOfBenefit_Procedure } from './R5_ExplanationOfBenefit_Procedure'
import { R5_ExplanationOfBenefit_ProcessNote } from './R5_ExplanationOfBenefit_ProcessNote'
import { R5_ExplanationOfBenefit_Related } from './R5_ExplanationOfBenefit_Related'
import { R5_ExplanationOfBenefit_SupportingInfo } from './R5_ExplanationOfBenefit_SupportingInfo'
import { R5_ExplanationOfBenefit_Total } from './R5_ExplanationOfBenefit_Total'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_UseEnum } from './R5_UseEnum'

export class R5_ExplanationOfBenefit      extends R5_DomainResource
{

   static def : string = 'ExplanationOfBenefit';
   identifier : R5_Identifier [];
   status : R5_ExplanationOfBenefitStatusEnum ;
   type : R5_CodeableConcept ;
   subType : R5_CodeableConcept ;
   use : R5_UseEnum ;
   patient : R5_Reference ;
   billablePeriod : R5_Period ;
   created : string ;
   enterer : R5_Reference ;
   insurer : R5_Reference ;
   provider : R5_Reference ;
   priority : R5_CodeableConcept ;
   fundsReserveRequested : R5_CodeableConcept ;
   fundsReserve : R5_CodeableConcept ;
   related : R5_ExplanationOfBenefit_Related [];
   prescription : R5_Reference ;
   originalPrescription : R5_Reference ;
   payee : R5_ExplanationOfBenefit_Payee ;
   referral : R5_Reference ;
   facility : R5_Reference ;
   claim : R5_Reference ;
   claimResponse : R5_Reference ;
   outcome : R5_ClaimProcessingCodesEnum ;
   disposition : string ;
   preAuthRef : string [];
   preAuthRefPeriod : R5_Period [];
   careTeam : R5_ExplanationOfBenefit_CareTeam [];
   supportingInfo : R5_ExplanationOfBenefit_SupportingInfo [];
   diagnosis : R5_ExplanationOfBenefit_Diagnosis [];
   procedure : R5_ExplanationOfBenefit_Procedure [];
   precedence : string ;
   insurance : R5_ExplanationOfBenefit_Insurance [];
   accident : R5_ExplanationOfBenefit_Accident ;
   item : R5_ExplanationOfBenefit_Item [];
   addItem : R5_ExplanationOfBenefit_AddItem [];
   adjudication : R5_ExplanationOfBenefit_Adjudication [];
   total : R5_ExplanationOfBenefit_Total [];
   payment : R5_ExplanationOfBenefit_Payment ;
   formCode : R5_CodeableConcept ;
   form : R5_Attachment ;
   processNote : R5_ExplanationOfBenefit_ProcessNote [];
   benefitPeriod : R5_Period ;
   benefitBalance : R5_ExplanationOfBenefit_BenefitBalance [];
}
