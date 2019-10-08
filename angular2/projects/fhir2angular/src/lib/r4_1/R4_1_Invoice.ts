import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_InvoiceStatusEnum } from './R4_1_InvoiceStatusEnum'
import { R4_1_Invoice_LineItem } from './R4_1_Invoice_LineItem'
import { R4_1_Invoice_Participant } from './R4_1_Invoice_Participant'
import { R4_1_Invoice_PriceComponent } from './R4_1_Invoice_PriceComponent'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Invoice      extends R4_1_DomainResource
{

   static def : string = 'Invoice';
   identifier : R4_1_Identifier [];
   status : R4_1_InvoiceStatusEnum ;
   cancelledReason : string ;
   type : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   recipient : R4_1_Reference ;
   date : string ;
   participant : R4_1_Invoice_Participant [];
   issuer : R4_1_Reference ;
   account : R4_1_Reference ;
   lineItem : R4_1_Invoice_LineItem [];
   totalPriceComponent : R4_1_Invoice_PriceComponent [];
   totalNet : R4_1_Money ;
   totalGross : R4_1_Money ;
   paymentTerms : string ;
   note : R4_1_Annotation [];
}
