import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_ClaimProcessingCodesEnum } from './R4_1_ClaimProcessingCodesEnum'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExplanationOfBenefitStatusEnum } from './R4_1_ExplanationOfBenefitStatusEnum'
import { R4_1_ExplanationOfBenefit_Accident } from './R4_1_ExplanationOfBenefit_Accident'
import { R4_1_ExplanationOfBenefit_AddItem } from './R4_1_ExplanationOfBenefit_AddItem'
import { R4_1_ExplanationOfBenefit_Adjudication } from './R4_1_ExplanationOfBenefit_Adjudication'
import { R4_1_ExplanationOfBenefit_BenefitBalance } from './R4_1_ExplanationOfBenefit_BenefitBalance'
import { R4_1_ExplanationOfBenefit_CareTeam } from './R4_1_ExplanationOfBenefit_CareTeam'
import { R4_1_ExplanationOfBenefit_Diagnosis } from './R4_1_ExplanationOfBenefit_Diagnosis'
import { R4_1_ExplanationOfBenefit_Insurance } from './R4_1_ExplanationOfBenefit_Insurance'
import { R4_1_ExplanationOfBenefit_Item } from './R4_1_ExplanationOfBenefit_Item'
import { R4_1_ExplanationOfBenefit_Payee } from './R4_1_ExplanationOfBenefit_Payee'
import { R4_1_ExplanationOfBenefit_Payment } from './R4_1_ExplanationOfBenefit_Payment'
import { R4_1_ExplanationOfBenefit_Procedure } from './R4_1_ExplanationOfBenefit_Procedure'
import { R4_1_ExplanationOfBenefit_ProcessNote } from './R4_1_ExplanationOfBenefit_ProcessNote'
import { R4_1_ExplanationOfBenefit_Related } from './R4_1_ExplanationOfBenefit_Related'
import { R4_1_ExplanationOfBenefit_SupportingInfo } from './R4_1_ExplanationOfBenefit_SupportingInfo'
import { R4_1_ExplanationOfBenefit_Total } from './R4_1_ExplanationOfBenefit_Total'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_UseEnum } from './R4_1_UseEnum'

export class R4_1_ExplanationOfBenefit      extends R4_1_DomainResource
{

   static def : string = 'ExplanationOfBenefit';
   identifier : R4_1_Identifier [];
   status : R4_1_ExplanationOfBenefitStatusEnum ;
   type : R4_1_CodeableConcept ;
   subType : R4_1_CodeableConcept ;
   use : R4_1_UseEnum ;
   patient : R4_1_Reference ;
   billablePeriod : R4_1_Period ;
   created : string ;
   enterer : R4_1_Reference ;
   insurer : R4_1_Reference ;
   provider : R4_1_Reference ;
   priority : R4_1_CodeableConcept ;
   fundsReserveRequested : R4_1_CodeableConcept ;
   fundsReserve : R4_1_CodeableConcept ;
   related : R4_1_ExplanationOfBenefit_Related [];
   prescription : R4_1_Reference ;
   originalPrescription : R4_1_Reference ;
   payee : R4_1_ExplanationOfBenefit_Payee ;
   referral : R4_1_Reference ;
   facility : R4_1_Reference ;
   claim : R4_1_Reference ;
   claimResponse : R4_1_Reference ;
   outcome : R4_1_ClaimProcessingCodesEnum ;
   disposition : string ;
   preAuthRef : string [];
   preAuthRefPeriod : R4_1_Period [];
   careTeam : R4_1_ExplanationOfBenefit_CareTeam [];
   supportingInfo : R4_1_ExplanationOfBenefit_SupportingInfo [];
   diagnosis : R4_1_ExplanationOfBenefit_Diagnosis [];
   procedure : R4_1_ExplanationOfBenefit_Procedure [];
   precedence : string ;
   insurance : R4_1_ExplanationOfBenefit_Insurance [];
   accident : R4_1_ExplanationOfBenefit_Accident ;
   item : R4_1_ExplanationOfBenefit_Item [];
   addItem : R4_1_ExplanationOfBenefit_AddItem [];
   adjudication : R4_1_ExplanationOfBenefit_Adjudication [];
   total : R4_1_ExplanationOfBenefit_Total [];
   payment : R4_1_ExplanationOfBenefit_Payment ;
   formCode : R4_1_CodeableConcept ;
   form : R4_1_Attachment ;
   processNote : R4_1_ExplanationOfBenefit_ProcessNote [];
   benefitPeriod : R4_1_Period ;
   benefitBalance : R4_1_ExplanationOfBenefit_BenefitBalance [];
}
